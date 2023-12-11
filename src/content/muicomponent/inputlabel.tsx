import {FormControl, InputLabel, OutlinedInput} from "@mui/material";

interface InputLabelProps {
    id?: string;
    labelName?: string;
    inputError?: boolean;
    valueName?: string | number;
    setValue: (value: any) => void;
    endAdornment?: any;
    type?: string;
    enable?: any
    rownum?: number
    multiline?: boolean
    onEnterPress?: () => void
}

export function InputLabelMui({
                                  id,
                                  labelName,
                                  inputError,
                                  valueName,
                                  setValue,
                                  endAdornment,
                                  type,
                                  enable,
                                  rownum,
                                  multiline,
                                  onEnterPress
                              }: InputLabelProps) {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && onEnterPress) {
            onEnterPress();
        }
    };
    return (
        <FormControl fullWidth>
            <InputLabel htmlFor={id} error={inputError}>
                {labelName}
            </InputLabel>
            <OutlinedInput fullWidth
                           sx={{borderRadius: '16px', background: 'initial'}}
                           rows={rownum}
                           multiline={multiline}
                           id={id}
                           value={valueName}
                           label={labelName}
                           onChange={e => setValue(e.target.value)}
                           endAdornment={endAdornment}
                           error={inputError}
                           type={type}
                           disabled={enable}
                           onKeyDown={handleKeyPress}
            />
        </FormControl>

    )

}