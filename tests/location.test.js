import { location_domain, location_origin } from '../src'

it('', () => {
  const list1 = [
    'https://example.com/',
    'https://example.com/css/style.css',
    'https://example.com/css/rtl.css',
    'https://example.com/js/main.js',
  ]

  const list2 = [
    'https://s3.example.com/cdn/expire-1-M/font-awesome/5.2.0/css/all.min.css',
  ]

  const list3 = [
    'https://s1.example.com/cdn/expire-1-M/justifiedGallery/3.7.0/css/justifiedGallery.min.css',
    'https://s1.example.com/cdn/expire-1-M/jquery/3.3.1/jquery.min.js',
  ]

  const list4 = [
    'https://s0.example.com/cdn/expire-1-M/justifiedGallery/3.7.0/js/jquery.justifiedGallery.min.js',
  ]

  const list5 = [
    'https://statics.example.com/fonts/meslo-LG/MesloLGM-Regular.ttf',
  ]

  const list6 = [
    'https://zz.example.com/linksubmit/push.js',
  ]

  const list7 = [
    'https://sp0.example.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif?l=https://example.com/',
  ]

  const list8 = [
    'https://hm.exmaple.com/hm.js?2394325b4a20e8ef6d823ca625799c22',
    'https://hm.exmaple.com/hm.gif?cc=1&ck=1&cl=24-bit&ds=800x600&vl=600&et=0&ja=0&ln=en-us&lo=0&rnd=78667338&si=2394325b4a20e8ef6d823ca625799c22&v=1.2.64&lv=1&sn=45958&ct=!!&tt=%E6%B2%B3%E5%8D%97%E4%B8%93%E4%B8%9A%E5%81%9A%E7%BD%91%E7%AB%99%2C%E7%BD%91%E7%AB%99%E5%BC%80%E5%8F%91%E5%BB%BA%E8%AE%BE%2C%E7%BD%91%E9%A1%B5%E8%AE%BE%E8%AE%A1%E5%88%B6%E4%BD%9C%E5%85%AC%E5%8F%B8-%E5%8D%9A%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4'
  ]

  const list9 = [
    'http://www.example.cn/',
    'http://www.example.cn/site/css/style.css',
    'http://www.example.cn/site/js/demo.js',
    'http://www.example.cn/site/dist/aos.css',
    'http://www.example.cn/site/img/logo.png',
    'http://www.example.cn/site/img/onea.png',
    'http://www.example.cn/site/img/oned.png',
    'http://www.example.cn/site/img/oneb.png',
    'http://www.example.cn/site/img/onec.png',
    'http://www.example.cn/d/file/p/2019/07-20/191ddec19d21ef61eec783e82cbb9695.jpg',
    'http://www.example.cn/d/file/p/2019/07-20/e5af4d5af080d19254cf1b487ffaca4a.jpg',
    'http://www.example.cn/d/file/p/2019/07-20/b000f1cca4a0e5d30c911a92fc7100b8.jpg',
    'http://www.example.cn/d/file/p/2019/07-20/small5bed222a4ddf6ead2c6b3d0166f9ba4d1563556109.jpg',
    'http://www.example.cn/d/file/p/2019/07-13/fe85112ebe74d66d32a3248c6b23608f.jpg',
    'http://www.example.cn/d/file/p/2019/07-13/c272c0222a45850855478102144c7d66.jpg',
    'http://www.example.cn/d/file/p/2019/07-13/3d3955d55ce6c163764df680ed9c2219.jpg',
    'http://www.example.cn/d/file/p/2019/07-13/97b2dd7b76fbf4465a9922fb6d96c897.jpg',
    'http://www.example.cn/d/file/p/2019/07-13/a930fe145aec7378d88b1bc4f43a15c3.png',
    'http://www.example.cn/d/file/p/2019/07-13/d721b49b4bbedbda514eb5791f418f0b.png',
    'http://www.example.cn/d/file/p/2019/07-13/edae1085f61013c5894dcbc979d67e67.jpg',
    'http://www.example.cn/d/file/p/2019/07-18/smalle0e47354b2d207bb23e69a3bfbdf511c1563416809.jpg',
    'http://www.example.cn/d/file/p/2019/07-15/8b2afe40ae9f6ab4b716ad436e57cdb4.jpg',
    'http://www.example.cn/d/file/p/2019/07-15/cab23ef0123aaa8dc2b1be3225d7fdcf.png',
    'http://www.example.cn/site/img/bd.jpg',
    'http://www.example.cn/site/img/sg.jpg',
    'http://www.example.cn/site/img/360.jpg',
    'http://www.example.cn/site/img/jan.png',
    'http://www.example.cn/site/img/index_img_03.png',
    'http://www.example.cn/site/img/ft_contc.png',
    'http://www.example.cn/site/js/jquery-2.1.1.min.js',
    'http://www.example.cn/site/dist/aos.js',
    'http://www.example.cn/site/js/jquery-1.11.1.min.js',
    'http://www.example.cn/site/js/jquery.particleground.min.js',
    'http://www.example.cn/site/img/db_gt.png',
    'http://www.example.cn/site/img/db_fan.png',
    'http://www.example.cn/site/img/db_dh.png',
    'http://www.example.cn/site/img/db_kf.png',
    'http://www.example.cn/site/img/mebu_bg.jpg',
    'http://www.example.cn/site/img/index_titile_bg2.png',
    'http://www.example.cn/site/img/one_a.png',
    'http://www.example.cn/site/img/one_d.png',
    'http://www.example.cn/site/img/one_b.png',
    'http://www.example.cn/site/img/one_c.png',
    'http://www.example.cn/site/img/four_bg.jpg',
    'http://www.example.cn/site/img/hezuo_bg.jpg',
    'http://www.example.cn/site/img/db_ly_bg.png',
  ]

  for (let item of list1) {
    expect(location_domain(item)).toBe('example.com')
  }

  for (let item of list2) {
    expect(location_domain(item)).toBe('s3.example.com')
  }

  for (let item of list3) {
    expect(location_domain(item)).toBe('s1.example.com')
  }

  for (let item of list4) {
    expect(location_domain(item)).toBe('s0.example.com')
  }

  for (let item of list5) {
    expect(location_domain(item)).toBe('statics.example.com')
  }

  for (let item of list6) {
    expect(location_domain(item)).toBe('zz.example.com')
  }

  for (let item of list7) {
    expect(location_domain(item)).toBe('sp0.example.com')
  }

  for (let item of list8) {
    expect(location_domain(item)).toBe('hm.exmaple.com')
  }

  for (let item of list9) {
    expect(location_domain(item)).toBe('www.example.cn')
  }

  for (let item of list1) {
    expect(location_origin(item)).toBe('https://example.com')
  }
})