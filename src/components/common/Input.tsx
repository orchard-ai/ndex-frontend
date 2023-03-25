type PropType = {
    value: string
    placeholder: string
    onChange: (value: string) => void
    form?: string
    className?: string
}

const Input = ({value, placeholder, className, onChange, form} : PropType) => {

    return (
        <input
            className="bg-ndex-input w-full pr-2 pl-2 pt-1 pb-1 border-ndex-input-border"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            form={form}
        />
    )
}

export default Input;