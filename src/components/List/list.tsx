import React from "react";
import { Icon, StepList, StepListProps } from "@ama-pt/agora-design-system";

const items = [
    {
      icon: "agora-line-coffee",
      desc: "Comidas",
      note: "Portugal é conhecido por sua culinária única e deliciosa, com pratos típicos como o bacalhau preparado de inúmeras formas, os famosos pastéis de nata e a tradicional francesinha, um sanduíche robusto e saboroso.",
    },
    {
      icon: "agora-line-money-taxes",
      desc: "Lugares",
      note: "O país abriga locais históricos impressionantes, como a Torre de Belém, o Mosteiro dos Jerónimos e a pitoresca vila de Sintra, todos representando a rica herança cultural e arquitetônica de Portugal.",
    },
    {
      icon: "agora-line-award",
      desc: "Curiosidades",
      note: "Portugal é o maior produtor de cortiça do mundo, possui a ponte mais longa da Europa (Vasco da Gama) e tem uma história marcante como berço de grandes navegadores da Era dos Descobrimentos.",
    },
  ];

const StepListIcon: React.FC<StepListProps> = (props) => {
  const storyArgs: StepListProps = {
    children: items.map((e, index) => {
      const key = `li-${index}`;
      return (
        <li className="mb-8" key={key}>
          <div className="flex flex-col justify-center ml-8 mb-24 text-black gap-8">
            <div className="flex gap-8 items-center text-black">
              <Icon className="black" name={e.icon} aria-hidden />
              {e.desc}
            </div>
            <div className="flex gap-8 items-center ">{e.note}</div>
          </div>
        </li>
      );
    }),
    ...props,
  };

  return (
    <div className="p-16 text-m-regular text-[var(--color-neutral-700)]">
      <StepList {...storyArgs} />
    </div>
  );
};

export default StepListIcon;