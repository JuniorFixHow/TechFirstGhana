import Text from "../ui/Text";

type CultureCardProps = {
    title: string,
    text: string,
}
const CultureCard = ({ title, text }: CultureCardProps) => {
  return (
    <div className='h-36 flexcenter flex-col rounded-lg gap-2 bg-white shadow-2xl p-4' >
        <Text align='center' text={title} type="big" color="red" />
        <Text align='center' text={text} type="base" color="grey" />
    </div>
  )
}

export default CultureCard