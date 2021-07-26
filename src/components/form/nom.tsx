import React from 'react';

export default function Formik(props:any) {
    const { form, setForm } = props;
    const NC = form.nc;

    function handleChange(e:any) {
      setForm({...form,nc: e.target.value});
    }

  return (
    <div>
      <label className="block text-base font-medium leading-relaxed text-blueGray-700">Nom d'utilisateur</label>
      <input 
        type="text"
        placeholder="Nom du joueur" onChange={handleChange} value={NC}
        className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-blueGray-500"
      />
      <p className="mt-1 text-xs italic text-black">Votre nom par défaut.</p>
    </div>
  );
}