import SecondContent from "../components/PageComponents/home/SecondContent";
import EightContent from "../components/PageComponents/home/EightContent";
import NinthContent from "../components/PageComponents/home/NinthContent";
import Gallery from "../components/PageComponents/home/Gallery";

const ApartmentAmenities = () => {
    return (
        <div>
            <div className="bg-[url('/pool.webp')] bg-cover bg-center bg-no-repeat h-[500px] lg:h-[550px] flex items-center justify-center ">
                <div className="z-40 text-white bg-[#0000008c] w-full h-full flex items-center justify-center">
                    <h2 className="uppercase font-neue-plak-black text-8xl">AMENITIES</h2>
                </div>
            </div>
            <SecondContent />
            <Gallery />
            <EightContent />
            <NinthContent />
        </div>
    )
}

export default ApartmentAmenities;
