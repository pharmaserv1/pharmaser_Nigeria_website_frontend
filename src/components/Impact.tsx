import React from 'react';

type ImpactProps = {
  title?: string;
  video?: string;
  description: string;
  image?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  imageClassName?: string;
};

const Impact = ({
  title,
  description,
  image,
  video,
  containerClassName,
  titleClassName,
  descriptionClassName,
  contentClassName,
  imageClassName,
}: ImpactProps) => {
  return (
    // <div className="grid grid-cols-2 items-center gap-12 py-8">
    <div
      className={`border-[#DCE4E8] border rounded-[20px] max-w-[616px] ${containerClassName} `}
    >
      {image && (
        <div
          className={` bg-cover bg-center bg-no-repeat bg-[#C7EEF6] h-[321px] rounded-t-[20px] ${imageClassName}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}

      {video && (
        <div className="rounded-t-[20px]">
          <video
            poster={video}
            src={video}
            playsInline
            controls={true}
            autoPlay={true}
            controlsList="nodownload"
            muted={true}
            loop
            className={` cursor-pointer w-[100%]  h-[321px] !rounded-t-[20px] `}
          />
        </div>
      )}
      <div className={`space-y-4 p-6 ${contentClassName}`}>
        <p
          className={`text-xl md:text-2xl text-dark-gray font-medium ${titleClassName} font-sofia`}
        >
          {title}
        </p>
        <p className={`text-gray-100 text-base ${descriptionClassName}`}>
          {description}
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Impact;
