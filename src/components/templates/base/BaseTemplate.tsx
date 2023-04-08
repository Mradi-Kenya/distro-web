export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return <div className="font-bold text-green-500 font-sans">{sampleTextProp}</div>;
};

export default BaseTemplate;