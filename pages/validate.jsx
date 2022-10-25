import React from 'react'
import { useForm } from 'react-hook-form'


function Validate() {
  const { register, handleSubmit, formState:{errors}} = useForm();
  const myfun = () => {
    alert('button is clicked');
  }
  return (
    <div className='row mt-5'>
      <div className="col-md-4 card m-auto shadow-lg" >
        <form onSubmit={handleSubmit(myfun)}>
          <div className="card-body">
            <div className="form-group  p-4" >
              <label htmlFor='fullname'> Nume si prenume</label>
              <input className='form-control'{...register('fullname', { required: true })} />
              {errors.fullname && errors.fullname.type == 'required' && <p className='text-danger'>Introduceti Numele si prenumele</p>}
            </div>

            <div className="form-group  p-4" >
              <label htmlFor='city'> Oras </label>
              <input className='form-control'{...register('city', { required: true, minLength: 3 })} />
              {errors.city && errors.city.type === 'required' && <p className='text-danger'>Introduceti Numele Orasului</p>}
            </div>

            <div className="form-group  p-4">
              <input type="submit" className='btn btn-success' />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Validate
