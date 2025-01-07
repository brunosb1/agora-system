"use client";
import CardTopicStatusStory from "@/components/Card/card";
import StepListIcon from "@/components/List/list";
import food from "@/jsons/food.json"
import pt from "@/jsons/pt.json"
import curiosity from "@/jsons/curiosity.json"
import { InputEmailBar } from "@ama-pt/agora-design-system";


export default function Home() {
  return (
    <div className="w-full relative bg-no-repeat bg-cover h-[700px]">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="pt3.jpg"
        alt="Background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative flex flex-col items-center justify-center gap-2 h-full z-20">
        <h2 className="text-3xl-medium font-bold font-manrope text-white">Porque você deveria vir visitar Portugal</h2>
        <h3 className="text-2xl-medium font-bold font-manrope text-white">
          Iremos te mostrar algumas coisas que te farão querer vir o mais rápido possivel para esse lugar especial
        </h3>
      </div>
      <section className="mt-64 p-16">
          <h1 className="text-black text-2xl-light gap-8 p-16 text-center">Para isso vamos separar em alguns tópicos</h1>
          <StepListIcon />
      </section>
      <section className="mt-64 p-16">
        <h1 className="text-black text-2xl-light gap-8 p-16 text-center">Comidas Típicas</h1>
        <CardTopicStatusStory data={food}/>
      </section>
      <section className="mt-64 p-16 ">
        <h1 className="text-black text-2xl-light gap-8 p-16 text-center">Lugares</h1>
        <CardTopicStatusStory data={pt}/>
      </section>
      <section className="mt-64 p-16 ">
        <h1 className="text-black text-2xl-light gap-8 p-16 text-center">Curiosidade</h1>
        <CardTopicStatusStory data={curiosity}/>
      </section>
      <section className="mt-64 p-16 bg-black">
        <h1 className="text-white text-2xl-light gap-8 p-16 text-center">Quer saber mais? coloque o seu e-mail e enviaremos um roteiro com diversos Lugares/Restaurantes para você aproveitar a sua jornada aqui em portugal</h1>
        <div className="flex justify-center items-center"> 
          <InputEmailBar label="E-mail" placeholder="Seu melhor e-mail" style={{width: '600px', height: '40px'}} />
        </div>
      </section>
    </div>
  );
}
