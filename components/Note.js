export default function Note(props) {
const d = new Date();
const options = { day: 'numeric', month: 'short' };
const noteDate = d.toLocaleDateString('id-ID', options); 

    return (
        <>
            <div className="items-center">
                <div className="grid grid-cols-1 mt-10 float-left mx-8">
                    <div className="w-48 text-center">
                        <div className="container second-color rounded-xl p-4 h-64 text-left overflow-hidden shadow">{props.content}
                        </div>
                        <h1>{props.title}</h1>
                        <p>{noteDate}</p>
                    </div>


                </div>
            </div>

        </>
    );
}