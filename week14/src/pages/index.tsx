

import MyForm from './comp/c';


export default function Render() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div id="root" className="bg-black">
        <MyForm />
      </div>
    </div>
  );
}
