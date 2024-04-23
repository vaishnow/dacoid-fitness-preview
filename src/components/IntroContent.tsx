type PageContent = { img: string; imgAlt: string; title: string; desc: string };

type Props = { data: PageContent };

const IntroContent = ({ data: { img, imgAlt, desc, title } }: Props) => {
  return (
    <>
      <div className="h-[50vh] my-5 py-5 flex items-center">
        <img src={img} alt={imgAlt} className="mx-auto max-h-full w-auto" />
      </div>
      <div className="w-11/12 mx-auto">
        <h2 className="font-semibold text-xl my-3">{title}</h2>
        <p>{desc}</p>
      </div>
    </>
  );
};
export default IntroContent;
