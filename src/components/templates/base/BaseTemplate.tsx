export interface IBaseTemplate {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="font-bold text-4xl text-blue-500 capitalize">
        {sampleTextProp}
      </h1>
    </div>
  );
};

export default BaseTemplate;
