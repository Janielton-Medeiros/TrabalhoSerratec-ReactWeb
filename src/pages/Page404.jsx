import error404 from '../assets/img/error404.png';

const Page404 = () => {
  return (
    <>
      <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img src={error404} alt="página error 404" />
      </div>
    </>
  );
};

export default Page404;