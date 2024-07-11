import Card from "./Card";

const Widget = ({ icon, title, subtitle, titleColor, subtitleColor }) => {
    
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="ml-[25px] flex h-[65px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-30 ml-6 flex w-auto flex-col justify-center">
        <p className={`font-dm text-base font-medium ${titleColor}`}>{title}</p>
        <h4 className={`text-xl font-bold ${subtitleColor}  dark:text-white`}>
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};
Widget.defaultProps = {
    titleColor:"text-gray-600",
    subtitleColor:"text-navy-700"
};

export default Widget;
