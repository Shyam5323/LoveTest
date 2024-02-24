export default function Result() {
  return (
    <div className="flex items-center align-middle self-center">
      <video width="320" height="240" controls preload="none" autoPlay>
        <source src="/nhpadhai.mp4" type="video/mp4" />
        {/* <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
