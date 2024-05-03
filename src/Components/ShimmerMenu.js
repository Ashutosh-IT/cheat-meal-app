import ShimmerMenuCard from "./ShimmerMenuCard";

const ShimmerMenu = () => {
    return (
        <div className="shimmer-menu">
            <div className="shimmer-menu-header">
                <div className="shimmer-menu-header-left">
                    <div className="shimmer-menu-img">
                    </div>
                </div>
            </div>
            <div className="shimmer-menu-center">
                <ShimmerMenuCard/>
                <ShimmerMenuCard/>
                <ShimmerMenuCard/>
            </div>
        </div>
    );
}
export default ShimmerMenu;