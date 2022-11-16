const spinnerGif = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/spinner.gif"

const Spinner = () => {
  return (
    <div className="Spinner">
      <img src={spinnerGif} alt="Spinner Gif" />
    </div>
  )
}

export default Spinner