import React from "react";
import { Titles } from "../Atomos/Texts";
import { DoubleContainer } from "./DoubleContainer";
import DataTable from "./Table";

export function History() {
  return (
    <DoubleContainer className="flex flex-col h-screen">
      <article className="flex flex-col flex-grow p-5">
        <header >
          <Titles text="Historial de datos" />
        </header>
        <section className="flex-grow flex flex-col mt-3">
       
          <DataTable className="flex-grow" />
        </section>
      </article>
    </DoubleContainer>
  );
}
