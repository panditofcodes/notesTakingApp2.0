import React from 'react'

function AddTag() {
  return (
    <>
    <div className="add-tag">
        {/* <textarea name="add-tag" id="add-tag" placeholder='Add Tag....'></textarea> */}
        <input type="search" name="add-tag" id="add-tag" placeholder='Add Tag.....'  />
    </div>
    </>
  )
}

export default AddTag