import { useState } from 'react'
import axios from 'axios'
import emailjs from "@emailjs/browser";

const initial = { name: '', phone: '', email: '', city: '', service: 'Modular Kitchen', propertyType: '', budget: '', message: '' }

export default function QuoteForm() {
  const [form, setForm] = useState(initial)
  const [state, setState] = useState({ loading: false, success: '', error: '' })
  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  // console.log(import.meta.env.VITE_SERVICE_ID)
  // console.log(import.meta.env.VITE_PUBLIC_KEY)
  // console.log(import.meta.env.VITE_TEMPLATE_ID)


  async function submit(e) {
    e.preventDefault()
    setState({ loading: true, success: '', error: '' })
    try {

      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: form.name,
          mobile: form.mobile,
          email: form.email,
          city: form.city,
          service: form.service,
          propertyType: form.propertyType,
          budget: form.budget,
          message: form.message
        },
        import.meta.env.VITE_PUBLIC_KEY
      );

      console.log(form)

      setForm(initial)
      setState({ loading: false, success: 'Thanks! Our design consultant will contact you shortly.', error: '' })
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      setState({
        loading: false,
        success: '',
        error: 'Unable to submit right now. Please call us directly.'
      });
    }
}

const field = (name, label, type = 'text', placeholder = '') => (
  <label className="grid gap-2 text-sm font-medium">
    {label}
    <input required={['name', 'phone', 'city'].includes(name)} name={name} value={form[name]} onChange={change} type={type} placeholder={placeholder} className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-sand" />
  </label>
)

return <form onSubmit={submit} className="grid gap-5 rounded-3xl bg-white p-6 shadow-xl sm:p-8">
  <div className="grid gap-5 sm:grid-cols-2">
    {field('name', 'Name *', 'text', 'Your name')}
    {field('phone', 'Mobile Number *', 'tel', '+91')}
    {field('email', 'Email', 'email', 'you@example.com')}
    {field('city', 'City / Location *', 'text', 'Jaipur')}
    <label className="grid gap-2 text-sm font-medium">Service
      <select name="service" value={form.service} onChange={change} className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-sand">
        <option>Modular Kitchen</option><option>Modular Wardrobe</option><option>Complete Home Interior</option><option>Living Room</option><option>Bedroom</option>
      </select>
    </label>
    <label className="grid gap-2 text-sm font-medium">Property Type
      <select name="propertyType" value={form.propertyType} onChange={change} className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-sand">
        <option value="">Select</option><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>4+ BHK</option><option>Villa</option><option>Office</option>
      </select>
    </label>
    <label className="grid gap-2 text-sm font-medium sm:col-span-2">Budget
      <select name="budget" value={form.budget} onChange={change} className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-sand">
        <option value="">Select Budget</option><option>Below ₹2 Lakh</option><option>₹2 - ₹5 Lakh</option><option>₹5 - ₹10 Lakh</option><option>Not Sure</option>
      </select>
    </label>
  </div>
  <label className="grid gap-2 text-sm font-medium">Message
    <textarea name="message" value={form.message} onChange={change} rows="4" placeholder="Tell us about your requirements" className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-sand" />
  </label>
  {state.success && <p className="rounded-xl bg-green-50 p-3 text-sm text-green-700">{state.success}</p>}
  {state.error && <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{state.error}</p>}
  <button disabled={state.loading} className="btn-primary w-full disabled:opacity-50">{state.loading ? 'Submitting...' : 'Get Free Quote'}</button>
</form>
}