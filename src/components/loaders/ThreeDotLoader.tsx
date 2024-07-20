import { ThreeDots } from 'react-loader-spinner'

const ThreeDotLoader = () => {
  return (
    <ThreeDots
    visible={true}
    height="30"
    width="30"
    color="#fff"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
  )
}

export default ThreeDotLoader