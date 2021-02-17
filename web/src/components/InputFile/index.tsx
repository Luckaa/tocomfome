import Button from '@material-ui/core/Button';
import React, { useRef, useState } from 'react';
import './inputFile.scss';

type Props = { onChange: (file: File) => void };

const InputFile: React.FC<Props> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | undefined>(undefined);

  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileChanged = event.target.files[0];
      setFile(fileChanged);
      onChange(fileChanged)
    }
  };

  const getUrlPreviewImage = () => {
    if (file) {
      return URL.createObjectURL(file);
    }
  };

  const handleClickFile = () => {
    inputRef.current?.click();
  };

  return (
    <div className="input-file-container">
      <input
        className="input-file"
        ref={inputRef}
        type="file"
        name="teste"
        onChange={handleChangeFile}
      />

      <div className="container-preview">
        <img className="preview-input-file" src={getUrlPreviewImage()} alt="" />
      </div>

      <Button
        className="btn-input-file"
        variant="contained"
        color="primary"
        onClick={handleClickFile}
      >
        Adicionar foto
      </Button>
    </div>
  );
};

export default InputFile;
