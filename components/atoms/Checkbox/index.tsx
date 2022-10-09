import { ReactElement, ChangeEventHandler } from "react";

import { Input, Mark, Wrapper } from "./style";

type CheckboxProps = {
  id?: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = (props: CheckboxProps): ReactElement => {
  const { id, checked, onChange } = props;

  return (
    <Wrapper>
      <Input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <Mark>
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <polyline strokeWidth="2" fill="none" points="16 6 10 15 6 11" />
        </svg>
      </Mark>
    </Wrapper>
  );
};

export default Checkbox;

