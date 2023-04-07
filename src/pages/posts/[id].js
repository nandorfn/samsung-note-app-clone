import inputForm from "../../../components/input";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function EditNote() {
    const router = useRouter();
    const { id } = router.query;
    const [selectedItem, setSelectedItem] = useState(notes.find(note => note.id === parseInt(id)));
    console.log(selectedItem);

    return <inputForm>...</inputForm>
}