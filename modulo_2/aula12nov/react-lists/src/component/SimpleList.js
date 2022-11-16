const numbers = [ <li>1</li>, <li>2</li>, <li>3</li>, <li>4</li> ]

const SimpleList = () => {
  return (
    <div className="SimpleList">
      <h2>List</h2>

      {numbers}
    </div>
  )
}

export default SimpleList