import Stack from 'react-bootstrap/Stack';

function VerticalExample() {
  return (
    <>
      <Header />
    <Stack gap={3}>
      <div className="p-2">
        <img
          src={require("../assets/images/headshots/MHM-headshot1.jpg")}
          alt={"Marlena Hooker Moore, photo by Wendy Wood"}
        ></img>
      </div>
      <div className="p-2">
        <p>
          Marlena Hooker Moore hails from King George County, Virginia. If
          you've never heard of it, that's ok. If you have heard of it, are you
          sure you aren't mixing it up with Prince George's County? Marlena
          trained as a musician and happily taught and performed music in the
          metro Denver area until she had a child of her own, whereupon she
          realized that there was something to be said for the reliability of a
          "day job." She then decided to do a whole career re-set and jumped
          into web development. Marlena figured that learning full-stack in its
          entirety would help her to choose the area for which she is best
          suited. Now that class is completed, she is looking forward to working
          her way up in this exciting new career!
        </p>{" "}
      </div>
      <div className="p-2">Third item</div>
      </Stack>
      <Footer />
      </>
  );
}

export default VerticalExample;



  
