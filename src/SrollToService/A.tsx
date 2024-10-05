import React, { useRef } from "react";

const ScrollToServicePage = () => {
    const ServicesRef = useRef<HTMLDivElement>(null);
 
    const gotoServices = () =>
        window.scrollTo({
            top: ServicesRef.current?.offsetTop ?? 0,
            behavior: "smooth",
            // You can also assign value "auto"
            // to the behavior parameter.
        });
 
    return (
        <div>
            <h1>GeeksForGeeks</h1>
            <button onClick={gotoServices}>Scroll to Services</button>
 
            <div ref={ServicesRef}>
                <h2>GeeksForGeeks Services</h2>
 
                <p>
                    Lorem Ipsum è un testo segnaposto utilizzato 
                    nel settore della tipografia e della stampa. 
                    Lorem Ipsum è considerato il testo segnaposto 
                    standard sin dal sedicesimo secolo, quando un anonimo
                    tipografo prese una cassetta di caratteri e li 
                    assemblò per preparare un testo campione. È 
                    sopravvissuto non solo a più di cinque secoli, ma
                    anche al passaggio alla videoimpaginazione, pervenendoci
                    sostanzialmente inalterato. Fu reso popolare, negli 
                    anni '60, con la diffusione dei fogli di caratteri 
                    trasferibili "Letraset", che contenevano passaggi del 
                    Lorem Ipsum, e più recentemente da software
                    di impaginazione come Aldus PageMaker, che includeva 
                    versioni del Lorem Ipsum.
                </p>
 
           
            </div>
        </div>
    );
};
 
export default ScrollToServicePage;