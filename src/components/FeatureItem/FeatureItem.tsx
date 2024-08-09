type FeatureItemProps = {
    feature: string;
    imgPath: string;
    title: string;
    description: string;
};

const FeatureItem = ({
    feature,
    imgPath,
    title,
    description,
}: FeatureItemProps) => {
    return (
        <div className="featureItem">
            <div className="imgDiv">
                <img src={imgPath} alt={`${feature} icon`} />
            </div>
            <p className="title">{title}</p>
            <p className="desc">{description}</p>
        </div>
    );
};

export default FeatureItem;
