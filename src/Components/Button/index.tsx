
interface ButtonProps{
  text:string,
  onClick: Function
}

function Button(props:ButtonProps) {

  return (
    <button className="h-10 px-5 text-secondary transition-colors duration-150 border border-pr rounded-lg focus:shadow-outline hover:bg-primary hover:text-background active:bg-darkPrimary"
      onClick={()=>props.onClick()}>
      {props.text}
    </button>
  )

}

export default Button;
