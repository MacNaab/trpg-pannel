import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Switch,
    FormControl,
    FormLabel,
    Textarea,
    Select,
    useDisclosure
} from "@chakra-ui/react";
import MarkerIcon from './markerIcon';
import { VerifAdd } from './export';

const uuid = require('react-uuid');

const MarkerIconList = MarkerIcon.map( (e) => 
  <option key={uuid()} value={e.id}>
    {e.id}
  </option>
);

export default function DrawerExample(props:any) {
  const { isAdd, setAdd, NewPosition} = props;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef:any = React.useRef();
  const [form,setForm] = React.useState({
    icon: "",
    img: "",
    titre: "",
    description: "",
  });
  const [body,setBody] = React.useState('');
  const handleChange = (event:any) => {
    const {name,value} = event.target;
    setForm({ ...form, [name]: value});
  }
  const [srcFinded,setSrcFind] = React.useState<string>('');
  React.useEffect( () => {
    const find = MarkerIcon.find(e => e.id === form.icon);
    if(find){
      const newURL = find.marker?.options?.iconUrl;
      if(newURL && newURL !== srcFinded){
        setSrcFind( newURL ); 
      }
    }
  },[form.icon]);
  
    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Menu
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu Admin</DrawerHeader>
  
            <DrawerBody>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="email-alerts" mb="0" title="Double clic pour ajouter un marker">
                  Mode Ajout Marker
                </FormLabel>
                <Switch id="email-alerts" size="lg" isChecked={isAdd} onChange={function(){ isAdd ? setAdd(false) : setAdd(true)}} />
              </FormControl>
              <hr className="mt-4" />
              <div className="grid justify-items-center gap-2 mt-10">
                <Select defaultValue="Layer" onChange={(event:any) => { setBody(event.target.value); }}>
                  <option value="Layer">Layer</option>
                  <option value="Commun">Commun</option>
                  <option value="PJ 1">PJ 1</option>
                </Select>
                <span>Position: {NewPosition !== null ? (<span> {NewPosition[0].toFixed(2)} , {NewPosition[1].toFixed(2)} </span>) : null } </span>
                <img alt="" className="rounded-xl w-14 h-14" src={form.img} />
                <Input placeholder="Image (url)"  name="img" onChange={handleChange} />

                <img 
                  alt=""
                  className="rounded-xl w-14 h-14"
                  src={srcFinded}
                />
                <Select 
                  defaultValue="Icone"
                  name="icon" onChange={handleChange}
                >
                  <option disabled value="Icone">Icone</option>
                  {MarkerIconList}
                </Select>
                <Input placeholder="Titre" value={form.titre} name="titre" onChange={handleChange} />
                <Textarea placeholder="Description ..." value={form.description} name="description" onChange={handleChange} />
              </div>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose} >
                Annuler
              </Button>
              <Button 
                colorScheme="blue"
                onClick={function(){VerifAdd(localStorage.getItem("MapID"),body,form,NewPosition); }}
              >
                Valider
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
}