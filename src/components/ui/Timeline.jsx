export default function Timeline({ items }) {
  return (
    <div className="relative w-full md:min-h-[83px]">
      <div className="absolute left-[4px] top-0 bottom-0 w-[2px] bg-timeline-bg rounded-full md:hidden"></div>
      <div className="hidden md:block absolute left-0 top-[10px] h-[14px] w-full bg-timeline-bg rounded-[10px]"></div>
      <div
        className="hidden md:block absolute left-0 top-[10px] h-[14px] bg-success rounded-[10px]"
        style={{ width: '27.8%' }}
      ></div>

      <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-0 md:min-h-[83px] w-full">
        {items.map((item, index) => {
          const isCompleted = index < 2;

          return (
            <div key={index} className="flex flex-col items-start md:items-center relative md:flex-1 pl-10 md:pl-0">
              <div
                className="absolute left-0 top-0 z-10 md:left-[50%] md:top-[12px] md:translate-x-[-50%]"
              >
                {isCompleted ? (
                  <div className="w-[10px] h-[10px] bg-white rounded-full border-2 border-success shrink-0"></div>
                ) : (
                  <div className="w-[10px] h-[10px] bg-error rounded-full shrink-0"></div>
                )}
              </div>

              <div className="text-left md:text-center pt-0 md:pt-8 w-full">
                <p className="text-[14px] font-normal text-secondary font-cairo capitalize mb-1 leading-[16px]">
                  {item.date}
                </p>
                <p className="text-[14px] font-medium text-primary font-cairo capitalize leading-[16px]">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
