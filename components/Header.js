export default function Header(props) {
    return(
      <>
        <div className="text-center p-14">
          <h1 className="text-4xl">Semua Catatan</h1>
          <p className="text-xl">{props.length} Catatan</p>
        </div>
      </>  
    );
}