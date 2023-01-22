import * as CheckBox from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';
import { useEffect } from 'react';


export function HabitsList() {
  // O useEffect só executa quando o componente renderiza em tela essa componentização evitou de rodar uma requisição a API
  useEffect(() => {
    console.log('carregou')
  }, [])

  return (
    <div className="mt-6 flex flex-col gap-3">
      <CheckBox.Root className="flex items-center gap-3 group">
        <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
          <CheckBox.Indicator>
            <Check size={20} className="text-white" />
          </CheckBox.Indicator>
        </div>
        <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
          Beber 2L de agua
        </span>
      </CheckBox.Root>
    </div>
  );
}
