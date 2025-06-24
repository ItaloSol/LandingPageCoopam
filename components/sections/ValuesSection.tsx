import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Truck, Smile } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: "400",
    label: "COOPERADOS",
    icon: <Users className="h-8 w-8 mx-auto text-[#257367] mb-4" />
  },
  {
    value: "50000",
    label: "TRANSPORTES",
    icon: <Truck className="h-8 w-8 mx-auto text-[#257367] mb-4" />
  },
  {
    value: "6500",
    label: "CLIENTES FELIZES",
    icon: <Smile className="h-8 w-8 mx-auto text-[#257367] mb-4" />
  }
];

export default function ValuesSection() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000; // Animation duration in ms
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setAnimatedValues(stats.map((stat, index) => {
          const targetValue = parseInt(stat.value);
          return Math.floor(progress * targetValue);
        }));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }
  }, [inView]);

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#9D9D9D] mb-12">
          Nossos números
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-[#9D9D9D] border-opacity-20 text-center">
              <CardContent className="p-8">
                {stat.icon}
                <div className="text-5xl font-bold text-[#257367] mb-2">
                  +{animatedValues[index].toLocaleString()}
                </div>
                <p className="text-gray-600 uppercase text-sm tracking-wider">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}