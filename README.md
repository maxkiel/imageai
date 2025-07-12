<h1>Cloudflare Imageai</h1>
<p>Unlimited AI Image Generator on Cloudlfare.</p>

<br>

## 📂 Models
- `@cf/stabilityai/stable-diffusion-xl-base-1.0`
- `@cf/bytedance/stable-diffusion-xl-lightning`
- `@cf/lykon/dreamshaper-8-lcm`

<br>

## ⚙️ Deploy
- Create a [Cloudflare](https://www.cloudflare.com/) **account**.
- Navigate to `Workers & Pages > Create > Create Worker`.
- Deploy the worker by clicking **Deploy**.
- Add AI binding in **Settings** name it `AI`.
- Edit the code by clicking **Edit Code**.
- Upload [worker.js](https://github.com/Vauth/imageai/blob/main/worker.js) into **Cloudflare**.
- Finally, **Deploy**.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/vauth/imageai)

<br>

## 📡 Live Demo
Check out the live demo [here](https://imageai.gpt-api.workers.dev). ([API Endpoint](https://imageai.gpt-api.workers.dev/generate?prompt=cat&model=@cf/stabilityai/stable-diffusion-xl-base-1.0))

<br>

## 📷 Screenshot
<a href="#Screenshot"><img src="https://github.com/user-attachments/assets/f54cc1e1-88aa-44d6-b8bb-644f4895e5e4" width="1612px"></a>

<br>

## 🔗 Contributing
Contributions are welcome! Feel free to submit a pull request or report an issue.

<br>

## 🔎 License
```
MIT License

Copyright (c) 2025 Vauth

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
