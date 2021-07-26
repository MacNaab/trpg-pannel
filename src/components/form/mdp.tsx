import React from 'react';

export default function Formik(props:any) {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const { form, setForm } = props;
    const MDP = form.mdp;

    function handleChange(e:any) {
      setForm({...form,mdp: e.target.value});
    }
    
  return (
    <div className="mt-4">
      <label className="block text-base font-medium leading-relaxed text-blueGray-700">Email Address</label>
      <input 
        type={show ? "text" : "password"}
        placeholder="Entrez votre mot de passe"
        value={MDP}
        onChange={handleChange}
        className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500"
      />
      <button type="button" onClick={handleClick} className="inline-flex absolute ml-0 px-4 py-3 font-semibold text-sm text-black hover:text-white transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-black focus:bg-blueGray-100 hover:text-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
        <div className="flex items-center justify-center">
          {show ? "Cacher" : "Afficher"}        
        </div>
      </button>
    </div>
  );
}