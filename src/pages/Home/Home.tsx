import FeatureItem from "../../components/FeatureItem/FeatureItem";

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <section className="heroContent">
                    <h2 className="srOnly">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className="features">
                <h2 className="srOnly">Features</h2>
                {[].map((feature, index) => (
                    <FeatureItem
                        feature={feature}
                        description=""
                        imgPath=""
                        title=""
                        key={index}
                    />
                ))}
            </section>
        </div>
    );
};

export default Home;
