'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isBlocked) {
      toast({
        variant: "destructive",
        title: "Acesso bloqueado",
        description: "Aguarde alguns minutos antes de tentar novamente."
      });
      return;
    }

    if (attempts >= 3) {
      setIsBlocked(true);
      setTimeout(() => {
        setIsBlocked(false);
        setAttempts(0);
      }, 300000); // 5 minutes
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push('/administrador/painel');
      } else {
        const data = await response.json();
        setAttempts(prev => prev + 1);
        toast({
          variant: "destructive",
          title: "Erro",
          description: data.error || 'Senha inválida'
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao fazer login"
      });
    } finally {
      setLoading(false);
      setPassword('');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Área Administrativa</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading || isBlocked}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#257367] hover:bg-[#1a5249]"
              disabled={loading || isBlocked}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}