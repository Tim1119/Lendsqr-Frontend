import { RotatingLines } from 'react-loader-spinner'

const PageLoader = () => (
        <div style={{display:"grid",placeItems:"center"}} >
            <RotatingLines
             visible={true}
             width="96"
             strokeWidth="5"
             animationDuration="0.75"
             ariaLabel="rotating-lines-loading"
            />
        </div>
);

export default PageLoader;
