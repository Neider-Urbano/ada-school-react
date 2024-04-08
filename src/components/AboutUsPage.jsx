import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const AboutUsPage = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                ¿Qué es mi producto?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Tasks List es una plataforma web construida con la tecnologia React
            Js.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                ¿Para que sirve?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Es un plataforma que nos servirà para llevar el control de todas
            aquellas tareas que se nos presenten en el dia a dìa pero de una
            manera automatizada, es decir, que podremos registrar, modificar,
            eliminar y actualizar el estado de nuestras tareas. De tal manera
            que se conformemos nuestra propia lista de tareas y ver cuales de
            ellas nos faltan por realizar y las que ya fueron resueltas.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Tecnologias usadas
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
              <li>bootstrap</li>
              <li>react js</li>
              <li>css</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AboutUsPage;
