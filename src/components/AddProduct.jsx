import { FloatingLabel, Form, Button, Image, ProgressBar, Container } from "react-bootstrap";
import { collection, getDocs, addDoc, doc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import NavbarUser from "./NavbarUser";

const AddProduct = () => {
  const [adding, setAdding] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [progressImage, setProgressImage] = useState(0);
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAdding(true);
    const docRef = await addDoc(collection(db, "products"), {
      title: event.target.elements.title.value,
      text: event.target.elements.text.value,
      price: event.target.elements.price.value,
      stock: event.target.elements.stock.value,
      category: event.target.elements.category.value,
      imagesUrl: [],
    });
    setAdding(false);
    console.log("ID del documento: ", docRef.id);

    if (image) {
      addImageInProduct(docRef, image);
    } else {
      console.log('No hay imagen seleccionada')
    }
  }

  useEffect(() => {
    getDocs(collection(db, "categories"))
      .then(querySnapshot => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({
            id: doc.id, ...doc.data()
          });

        });
        setCategories(data);
      })
      .catch(error => {
        console.log(error);
        setCategories([]);
      })
  }, []);

  const addImageInProduct = (productRef) => {

    console.log('Nombre de la imagen', image.name)
    const storage = getStorage();
    const storageRef = ref(storage, image.name);

    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = parseInt((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgressImage(progress);

        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;

          default:
            console.log(error.code);
            break;
        }
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('Link de la imagen:', downloadURL);
          // ACTUALIZAR DOC----------
          updateDoc(productRef, {
            imagesUrl: [downloadURL]
          }).then(doc => {

          })

          //-------------------------
        });
      }
    );
  }

  const handleChangeImage = (event) => {
    setImage(event.target.files[0])
    setImagePreview(URL.createObjectURL(event.target.files[0]))
    //console.log(image.name)
  }

  return (
    <>
      <Form style={{ textAlign: 'left' }} className="mt-4" onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="Título" className="mb-3">
          <Form.Control type="text" name="title" placeholder="Titulo del producto" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea2" label="Información del producto" className="mb-3">
          <Form.Control
            name="text"
            as="textarea"
            placeholder="Información del producto"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Precio" className="mb-3">
          <Form.Control type="text" name="price" placeholder="Precio" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Stock" className="mb-3">
          <Form.Control type="text" name="stock" placeholder="Stock" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingSelect" label="Categoria" className="mb-3">
          <Form.Select name="category" aria-label="Cateogria">
            {categories.map(category => <option value={category.id}>{category.name}</option>)}
          </Form.Select>
        </FloatingLabel>


        <FloatingLabel controlId="floatingPassword" label="Selecciona las imágenes del producto" className="mb-3">

          <Form.Control type="file" accept="image/*" name="imagesUrl" onChange={handleChangeImage} multiple />
        </FloatingLabel>

        <Button disabled={false} variant="secondary" type="submit" className="mt-2 input-block-level form-control">
          {adding ? 'Cargando producto...' : 'Cargar producto'}
        </Button>
      </Form>
      <Image src={imagePreview} className="mt-4" style={{ width: 100, height: 100 }} />
      <ProgressBar now={progressImage} label={`${progressImage}%`} className="mt-4" />
    </>
  );
};

export default AddProduct;
