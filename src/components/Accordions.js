import React from 'react';
import faqData from '../data/faqData';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';



const Accordions = () => {
    return (
        <Accordion>
            {
                faqData.map(item => {
                    const { id, headText, subText } = item;
                    return (
                        <AccordionItem key={id}>
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    <h4>{headText}</h4>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p>{subText}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    );
                })
            }
        </Accordion>
    );
};

export default Accordions;