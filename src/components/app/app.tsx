import * as React from 'react';

interface Props {
  textHello: string
}

const App: React.FunctionComponent<Props> = (props: Props) => {
  const {textHello} = props;

  return (
    <div>{textHello}</div>
  );
};

export default App;
