import React, { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

function ProfileDetailForm() {

    // for form
    const [formData, setFormData] = useState({
        comments: false,
        candidates: false,
        offers: false,
        pushNotifications: ''
    });


    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const Username = e.target[0].value;
        const About = e.target[1].value;
        // const PhotoIcon = e.target[2].value;
        // const Coverphoto = e.target[3].value;
        const First_name = e.target[4].value;
        const Last_name = e.target[5].value;
        const Email = e.target[6].value;
        const Contact = e.target[7].value;
        const Whatsapp = e.target[8].value;
        // const Country = e.target[9].value;
        const Street_address = e.target[10].value;
        const City = e.target[10].value;
        const State = e.target[10].value;
        const ZIP = e.target[10].value;

        console.log(formData);  // Notification
        console.log("_________________________________________________________");
        console.log(Username, About, First_name, Last_name, Email, Contact, Whatsapp, Street_address, City, State, ZIP);
    };


    return (
        <div className='absolute right-80 bottom-5 top-20 '>
            {/* <div class="w-full bg-cover relative -right-20 max-w-md lg:max-w-2xl lg:w-7/12"> */}
            <div className='flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row'>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Profile
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                This information will be displayed publicly so be careful what
                                you share.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                                                Vidyavistar.com/
                                            </span>
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                placeholder="Your username"
                                                autoComplete="username"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-blue-600 focus:ring-0 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="about"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            placeholder="Write a few sentences about yourself."
                                            rows={3}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            defaultValue={""}
                                        />
                                    </div>

                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="photo"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Photo
                                    </label>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <UserCircleIcon
                                            aria-hidden="true"
                                            className="h-12 w-12 text-slate-400"
                                        />
                                        <button
                                            type="button"
                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="cover-photo"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Cover photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon
                                                aria-hidden="true"
                                                className="mx-auto h-12 w-12 text-gray-600"
                                            />
                                            <div className="mt-4 flex text-sm/6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs/5 text-gray-600">
                                                PNG, JPG up to 2MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Personal Information
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                Use a permanent address where you can receive mail.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="first-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="last-name"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Email address<span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="abc@gmail.com"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                                {/* Mobile no  */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="Contact-no"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Contact <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Contact"
                                            name="Contact"
                                            type="tel"
                                            pattern="[0-9]{10}"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                            placeholder="Enter your Contact number"
                                        />
                                    </div>
                                </div>

                                {/* Whatsapp */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="Whatsapp-no"
                                        className="block text-sm font-medium text-gray-900"
                                    >
                                        Whatsapp <span className="text-red-500">*</span>
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="Whatsapp"
                                            name="whatsapp"
                                            type="tel"
                                            pattern="[0-9]{10}"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                            placeholder="Enter your Whatsapp number"
                                        />
                                    </div>
                                </div>


                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="country"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Country
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
                                        >
                                            <option>select</option>
                                            <option>India</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="street-address"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="street-address"
                                            name="street-address"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label
                                        htmlFor="city"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="region"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="region"
                                            name="region"
                                            type="text"
                                            autoComplete="address-level1"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="postal-code"
                                        className="block text-sm/6 font-medium text-gray-900"
                                    >
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="postal-code"
                                            name="postal-code"
                                            type="text"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base/7 font-semibold text-gray-900">
                                Notifications
                            </h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                We'll always let you know about important changes, but you pick
                                what else you want to hear about.
                            </p>
                            {/* Notification */}
                            <div className="mt-10 space-y-10">
                                <fieldset>
                                    <legend className="text-sm/6 font-semibold text-gray-900">
                                        By Email
                                    </legend>
                                    <div className="mt-6 space-y-6">
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="comments"
                                                    name="comments"
                                                    type="checkbox"
                                                    checked={formData.comments}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm/6">
                                                <label
                                                    htmlFor="comments"
                                                    className="font-medium text-gray-900"
                                                >
                                                    Comments
                                                </label>
                                                <p className="text-gray-500">
                                                    Get notified when someones posts a comment on a
                                                    posting.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="candidates"
                                                    name="candidates"
                                                    type="checkbox"

                                                    checked={formData.candidates}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm/6">
                                                <label
                                                    htmlFor="candidates"
                                                    className="font-medium text-gray-900"
                                                >
                                                    Candidates
                                                </label>
                                                <p className="text-gray-500">
                                                    Get notified when a candidate applies for a job.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="relative flex gap-x-3">
                                            <div className="flex h-6 items-center">
                                                <input
                                                    id="offers"
                                                    name="offers"
                                                    type="checkbox"
                                                    checked={formData.offers}
                                                    onChange={handleChange}
                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                />
                                            </div>
                                            <div className="text-sm/6">
                                                <label
                                                    htmlFor="offers"
                                                    className="font-medium text-gray-900"
                                                >
                                                    Offers
                                                </label>
                                                <p className="text-gray-500">
                                                    Get notified when a candidate accepts or rejects an
                                                    offer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            className="text-sm/6 font-semibold text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
            {/* </div> */}


        </div>
    )
}

export default ProfileDetailForm;