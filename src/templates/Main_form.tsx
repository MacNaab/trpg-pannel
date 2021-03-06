import { ReactNode } from 'react';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700" style={{backgroundImage:"url('/assets/images/bg.jpg')",backgroundSize:"cover"}} >
    {props.meta}

    <div className="max-w-screen-lg mx-auto">
      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm text-white">
        © Copyright {new Date().getFullYear()} {AppConfig.title}.
      </div>
    </div>
  </div>
);

export { Main };
