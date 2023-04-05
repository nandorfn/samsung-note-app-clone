export default function Note(props) {
    return (
        <>
            <div className="items-center">
                <div className="grid grid-cols-1 mt-10 float-left mx-8">
                    <div className="w-48 text-center">
                        <div className="container second-color rounded-xl p-4 h-64 text-left overflow-hidden shadow">{props.content}
                        </div>
                        <h1>{props.title}</h1>
                        <p>28 Feb</p>
                    </div>


                </div>
            </div>

        </>
    );
}