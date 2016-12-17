// BASE

Chứa tất cả những mẫu CSS có sẵn mặc định cho dự án ví dụ như file Reset.css hoặc Normalize.css 
(dùng để bỏ những thuộc tính định dạng mặc định do trình duyệt áp dụng cho website), hoặc các mẫu
CSS để xử lý kiểu chữ (typography), vân vân và vân vân, tùy thuộc vào dự án sẽ có thêm những 
mẫu khác nữa.

// HELPERS

Chứa những tiện ích, công cụ hỗ trợ trong Sass mà chúng ta sử dụng trong cả dự án đại loại như những
function hoặc mixin. Trong thư mục này còn có thể chứa thêm file_variables.scss (cũng có thể đặt 
là _config.scss) tất cả các biến toàn cục dùng cho dự án sẽ cho hết vào file này ví dụ như kiểu chữ, 
font chữ, các biến màu sắc, vân vân và vân vân,…

// LAYOUT

Trong này chứa các file có nhiệm vụ định dạng bố cục cho những phần chính của trang web như header, 
footer,…Và một file ứng với một cục, chứ không nên định dạng bố cục cho nhiều phần trong một file, 
có thể đặt tên là layout/ hoặc partials/ . Ngoài ra có thể đưa file_grid vào đây nếu bạn đang làm 
một dự án sử dụng grid system để định dạng bố cục cho trang web.

// COMPONENTS

Những định dạng cho các thành phần trang web sẽ được đặt trong thư mục components/ (đôi khi đặt 
là modules/). Nếu layout/ dành cho những thành phần chính của trang web thì components/ dành 
cho những thành phần nhỏ hơn. Trong này chưa tất cả những thứ như slider, loader, widget, vân 
vân và vân vân. Có rất nhiều thể loại thành phần trong components/ khi mà trang web của bạn 
được chia nhỏ theo chức năng.

// PAGES

Trường hợp website của bạn có những trang không dùng chung một template, và mỗi trang có một 
kiểu thiết kế khác nhau thì lúc đó bạn nên đặt code .scss định dạng cho những trang đó vào đây 
thư mục pages/. Ví dụ trang home và trang contact sử dụng thiết kế khác nhau về bố cục và màu 
sắc và không dùng những code .scss định dạng chung, thì nên có 2 file _home.scss và _contact.scss 
trong thư mục pages/ để giải quyết vấn đề.

Tuỳ vào quá trình triển khai, những file trong thư mục này có thể có hoặc không được gom lại chung 
với những file thành phần khác khi biên dịch. Đều do bạn quyết định thôi, thông thường mình chỉ gom 
những thành phần trong thư mục này khi có trang  cần sử dụng chúng. Ví dụ trang home có bố cục khác 
với những trang khác cần phải biên dịch thêm 200 dòng CSS nữa, trong khi những trang khác không cần 
những dòng CSS đó, nên chỉ cần biên dịch riềng file _home.scss cho trang home và chỉ đưa vào khi 
load trang home.

// THEMES

Nếu dự án sử dụng nhiều theme cùng lúc thì nên có thư mục này themes/. Để hết mọi thứ liên quan tới 
theme hoặc định dạng cho những trang đặc biệt vào đây.

// VENDORS

Cuối cùng, thông thường dự án nào cũng xài ít nhất một thành phần nào đó của bên thứ ba, và đây là 
nơi dành cho các thành phần của bên thứ ba, thư mục vendors/, trong phạm vi bài viết bên thứ ba 
có thể là các framework hoặc thư viện mở rộng như Bootstrap,jQueryUI, Fancy Carousel Slider jQuery 
Powered,… Hãy đặt hết những thành phần không phải code do team của dự án viết vào đây, mục đích là 
khi có vấn đề gì đó thì bạn có thể xác định được vấn đề không phải do code của team, mà là do code 
đến từ bên thứ ba, khi đó Google sẽ giúp bạn giải quyết vấn đề.

Mặc khác, cũng nên có một thư mục vendors-extensions/ chứa những phần mở rộng từ thư viện hoặc 
framework của bên thứ ba do chúng ta viết thêm. Ví dụ bạn muốn mở rộng Bootstrap, bạn sẽ có một 
file là _bootstrap.scss, khi đó mọi thứ bạn mở rộng hoặc thêm vào sẽ đặt hết trong file này và 
tránh được việc chỉnh sửa file gốc thư viện hoặc framework.