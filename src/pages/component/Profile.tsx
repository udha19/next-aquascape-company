import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Profile() {
  const description = [
    {
      title: "Lorem ipsum dolor sit amet",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at cursus ex. Etiam egestas neque sit amet massa tempor molestie. Vivamus varius mauris nulla, molestie rhoncus purus pulvinar nec.
		Vestibulum id bibendum diam. Maecenas urna purus, pellentesque in
		venenatis eget, blandit sit amet orci. Nunc euismod imperdiet
		egestas. Duis vestibulum, nulla sit amet placerat bibendum, quam
		magna fringilla lectus, ut pellentesque nisl dolor at urna. Orci
		varius natoque penatibus et magnis dis parturient montes, nascetur
		ridiculus mus. In nulla libero, rhoncus ut erat eu, ultricies
		convallis leo. Nunc suscipit massa at feugiat lobortis. Nam
		condimentum odio ut ullamcorper laoreet. Class aptent taciti
		sociosqu ad litora torquent per conubia nostra, per inceptos
		himenaeos. Sed iaculis in ligula in tincidunt. Fusce pretium arcu
		ut lobortis convallis. Praesent ipsum lectus, tincidunt in cursus
		nec, laoreet cursus leo. Proin nec finibus orci.`,
    },
    {
      title: "Praesent molestie mollis massa",
      description: ` Praesent molestie mollis massa, quis mollis nibh lobortis
			pulvinar. Integer quis vestibulum ex. Maecenas at egestas mi, nec
			hendrerit lacus. Pellentesque risus dui, luctus et ligula quis,
			gravida scelerisque urna. Quisque massa nulla, imperdiet sit amet
			quam ac, mollis sagittis sapien. Duis sit amet neque ac velit
			consequat viverra. Duis augue massa, elementum et lectus ac,
			rutrum efficitur felis. Vestibulum finibus pretium sem. Ut
			eleifend diam vitae scelerisque consectetur. Donec ac neque ex.
			Praesent dapibus ultricies gravida. Etiam tristique ante non
			scelerisque malesuada. Pellentesque vitae dui pulvinar, bibendum
			augue in, tempor purus. Pellentesque lectus odio, malesuada ut
			ipsum pulvinar, rutrum vestibulum turpis.`,
    },
    {
      title: "Donec interdum velit ex",
      description: ` Donec interdum velit ex, sed semper mi euismod a. Praesent
			elementum vel justo non commodo. Vivamus id mi consectetur, tempor
			magna non, varius mauris. Nullam rutrum odio id lorem gravida
			euismod. Orci varius natoque penatibus et magnis dis parturient
			montes, nascetur ridiculus mus. Vestibulum vel porttitor orci.
			Maecenas pretium, risus sit amet pretium rhoncus, quam justo
			convallis nisl, a aliquet nisl ante vel tortor. In ac sapien a
			quam blandit laoreet. Cras rhoncus lectus et ante malesuada, ac
			auctor ipsum posuere. Donec bibendum cursus nunc, sed posuere
			neque malesuada nec. Sed dapibus libero nec venenatis efficitur.
			Morbi tincidunt posuere turpis, eget euismod nibh tempor vel.
			Etiam quam neque, elementum nec aliquet ac, vehicula nec nulla.
			Curabitur eu interdum massa. Maecenas eget lectus in mi iaculis
			egestas. Sed feugiat velit at rutrum euismod.`,
    },
  ];
  return (
    <>
      <div className="flex min-h-1/2 flex-row items-center justify-between p-20 bg-hero">
        <div className="z-10 max-w-5xl w-full mx-auto items-center justify-between font-mono text-sm lg:flex">
          <div className="m-2 shadow-2xl bg-teal-200/30 backdrop-blur-sm rounded-full p-8">
            <p className="text-center text-2xl whitespace-nowrap">Your Aquascaping </p>
            <p className="text-center text-3xl ">Solutions </p>
          </div>
          <div className="bg-teal-200/30 backdrop-blur-sm rounded-xl p-10 shadow-xl lg:w-3/4">
            <b className="text-xl">Our Description</b>
            <Accordion>
              {description.map((desc, index) => {
                return (
                  <AccordionItem
                    key={index}
                    aria-label="Accordion 1"
                    title={desc.title}
                  >
                    <p>{desc.description}</p>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
