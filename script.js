// ==================================================
// COGNI-SHIELD v2.1 — HỆ THỐNG NGHIÊN CỨU KHOA HỌC
// Kiến trúc: Module-based | Bảo mật | Dữ liệu chuẩn
// ==================================================

/**
 * Cấu hình hệ thống — Tách riêng để dễ điều chỉnh
 */
const CONFIG = Object.freeze({
    ACCESS_CODES: Object.freeze(['CS-TH-001', 'CS-TH-002', 'CS-PT-101', 'CS-PT-102', 'DEMO-2026', 'TEST-DEV']),
    MODULES_PER_WEEK: 1,
    TOTAL_MODULES: 4,
    REFLECT_PAUSE_MS: 3000,
    STORAGE_KEY: 'cognishield_session',
    NODE_ENV: 'production' // Đặt 'development' để mở tất cả mô-đun
});

/**
 * Dữ liệu mô-đun — Tách riêng, dễ bảo trì
 */
const MODULES = Object.freeze([
    {
        id: 1,
        title: 'Mô-đun 1: Thông tin y tế sai lệch',
        post: '⚠️ CẢNH BÁO KHẨN CẤP: Uống nước đun sôi với lá bưởi có thể tiêu diệt tế bào ung thư! Các công ty dược giấu kín để bán thuốc đắt tiền — Chia sẻ ngay để cứu người thân!',
        options: [
            '🔁 Chia sẻ ngay cho mọi người biết trước khi quá muộn',
            '👂 Đọc rồi để đó, không chia sẻ cũng không bình luận',
            '🔍 Kiểm tra nguồn tin từ Bộ Y Tế / bệnh viện uy tín trước',
            '💬 Bình luận xác nhận đúng rồi, khuyên mọi người làm theo'
        ],
        responses: [
            '💬 Chủ bài viết: "Cảm ơn bạn đã lan tỏa! Nhiều người cần biết điều này lắm, đừng để bị lừa!"',
            '💬 Chủ bài viết: "Chỉ muốn cảnh báo thôi mà, ai tin thì tin, không tin thì thôi mà..."',
            '💬 Chủ bài viết: "Ồ bạn cẩn thận quá nhỉ? Mình thấy hàng trăm người chia sẻ rồi mà! Nguồn ở đâu cũng được, quan tâm là mọi người khỏe mạnh!"',
            '💬 Chủ bài viết: "Đúng rồi đó! Mình cũng nghe bác sĩ nói vậy rồi, chỉ là họ không dám công bố thôi!"'
        ],
        questions: [
            'Tại sao bạn chọn hành động này?',
            'Điều gì khiến bạn tin hoặc nghi ngờ thông tin trên?',
            'Bạn có chắc chắn về nguồn gốc của thông tin này không?',
            'Nếu thông tin sai, hành động của bạn sẽ ảnh hưởng như thế nào?'
        ],
        lessons: [
            '📌 <strong>Dấu hiệu nhận biết:</strong> Dùng từ "khẩn cấp", "bị giấu kín" để tạo áp lực tâm lý, khiến hành động nhanh mà không suy nghĩ.',
            '🔬 <strong>Giải thích khoa học:</strong> Không có nghiên cứu được bình duyệt chứng minh nước lá bưởi chữa ung thư. Điều trị phải theo phác đồ bác sĩ chuyên khoa.',
            '🛡️ <strong>Cách phòng tránh:</strong> Luôn kiểm tra thông tin trên trang chính thức của Bộ Y Tế, Viện Ung Bướu Quốc gia trước khi tin hoặc chia sẻ.'
        ]
    },
    {
        id: 2,
        title: 'Mô-đun 2: Tin đồn về trường học',
        post: '🚨 THÔNG BÁO: Ngày mai toàn trường nghỉ học do có nguy cơ sập nhà! Ban giám hiệu không dám công bố rộng để tránh hoảng sợ — Chia sẻ nhanh cho bạn bè biết!',
        options: [
            '📢 Chia sẻ ngay vào tất cả nhóm lớp',
            '📞 Gọi trực tiếp cho thầy/cô giáo chủ nhiệm xác minh',
            '⏳ Chờ thông báo trên trang chính thức nhà trường',
            '📤 Chia sẻ kèm bình luận: "Đúng rồi mình nghe rồi, chắc sập thật!"'
        ],
        responses: [
            '💬 Chủ bài viết: "May quá biết sớm! Cảm ơn bạn, mình cũng chia sẻ cho người nhà!"',
            '💬 Chủ bài viết: "Ủa hỏi thầy cô làm gì, nhiều người biết rồi mà, chắc đúng 100%!"',
            '💬 Chủ bài viết: "Chờ tới khi nào? Đến lúc xảy ra thì muộn rồi! Chia sẻ trước cho an tâm!"',
            '💬 Chủ bài viết: "Đúng đó! Mình cũng có người quen nói vậy, đợi gì nữa!"'
        ],
        questions: [
            'Bạn dựa vào đâu để quyết định tin hay không?',
            'Tại sao thông tin "không công bố chính thức" lại lan truyền nhanh?',
            'Nếu bạn chia sẻ mà thông tin sai, hậu quả gì xảy ra?',
            'Làm sao để phân biệt thông báo chính thức với tin đồn?'
        ],
        lessons: [
            '📌 <strong>Dấu hiệu nhận biết:</strong> Thông tin quan trọng nhưng "không được công bố chính thức" là dấu hiệu nguy hiểm cần cảnh giác cao độ.',
            '🔬 <strong>Giải thích tâm lý:</strong> Tin đồn lan tỏa nhanh khi đánh vào nỗi sợ và lòng quan tâm. Người ta thường hành động trước rồi mới suy nghĩ.',
            '🛡️ <strong>Cách phòng tránh:</strong> Chỉ tin vào thông báo có chữ ký, con dấu hoặc đăng trên trang chính thức của nhà trường. Không chia sẻ khi chưa xác nhận.'
        ]
    },
    {
        id: 3,
        title: 'Mô-đun 3: Thông tin gây hoang mang xã hội',
        post: '⚠️ CẢNH BÁO KHU DÂN CƯ: Nhóm người lạ đến từng nhà tuyển dụng, thực ra là bắt cóc trẻ em! Đã có 3 trường hợp mất tích — Chia sẻ để cảnh báo mọi người!',
        options: [
            '🚨 Chia sẻ ngay cho toàn bộ khu dân cư biết',
            '👮 Báo cho tổ trưởng dân phố / công an phường xác minh',
            '❓ Hỏi chi tiết: địa điểm cụ thể, thời gian, nguồn tin',
            '📱 Đăng lại kèm: "Cảnh giác cao độ, nguy hiểm lắm!"'
        ],
        responses: [
            '💬 Chủ bài viết: "Cảm ơn bạn! Mọi người cần biết ngay lập tức!"',
            '💬 Chủ bài viết: "Làm gì có thời gian báo, đến lúc họ biết thì đã có chuyện rồi!"',
            '💬 Chủ bài viết: "Người ta không nói rõ để tránh kẻ xấu đề phòng! Cứ chia sẻ là đúng rồi!"',
            '💬 Chủ bài viết: "Đúng đó! Bây giờ ai cũng sợ hết!"'
        ],
        questions: [
            'Thông tin này có thiếu chi tiết quan trọng gì không?',
            'Nếu thông tin sai, việc chia sẻ sẽ gây ra gì?',
            'Tại sao thấy nhiều người chia sẻ thì ta dễ tin hơn?',
            'Những chi tiết nào chứng tỏ đây có thể là tin giả?'
        ],
        lessons: [
            '📌 <strong>Dấu hiệu nhận biết:</strong> Không nêu địa điểm cụ thể, nguồn tin không rõ, số liệu mơ hồ ("3 trường hợp" nhưng không nói ở đâu).',
            '🔬 <strong>Giải thích tâm lý:</strong> Hiện tượng "đám đông" — khi thấy nhiều người chia sẻ, não bộ tự giảm kiểm tra thông tin. Đây là điểm yếu tin giả thường khai thác.',
            '🛡️ <strong>Cách phòng tránh:</strong> Đặt câu hỏi: Ở đâu? Ai chứng kiến? Nguồn từ đâu? Nếu không có trả lời cụ thể → không chia sẻ, báo cơ quan chức năng.'
        ]
    },
    {
        id: 4,
        title: 'Mô-đun 4: Thông tin khoa học bị bóp méo',
        post: '🔬 KHÁM PHÁ MỚI: Đeo vòng từ trường này bảo vệ hoàn toàn khỏi bức xạ điện thoại! Các công ty giấu vì sợ bán máy ít — Mua ngay trước khi hết hàng!',
        options: [
            '🛒 Mua ngay & chia sẻ cho gia đình cùng dùng',
            '📚 Tìm hiểu trên tạp chí khoa học / viện nghiên cứu uy tín',
            '🚫 Không tin, không mua, không chia sẻ',
            '📢 Chia sẻ để mọi người tránh bị lừa mua đắt tiền'
        ],
        responses: [
            '💬 Chủ bài viết: "Đúng rồi! Mình đã đặt 5 cái cho cả nhà, tốt lắm đó!"',
            '💬 Chủ bài viết: "Học thuật khó hiểu lắm, người ta đã nghiên cứu rồi mà!"',
            '💬 Chủ bài viết: "Bạn không hiểu thôi, không phải không biết là không có đâu!"',
            '💬 Chủ bài viết: "Cảm ơn bạn, mình cũng nghĩ vậy nhưng không dám nói!"'
        ],
        questions: [
            'Thông tin này có mục đích quảng cáo bán hàng không?',
            'Ai xác nhận "kết quả nghiên cứu" này?',
            'Tại sao "bị giấu" là lý do thường gặp trong tin giả?',
            'Làm sao để phân biệt thông tin khoa học thật với giả?'
        ],
        lessons: [
            '📌 <strong>Dấu hiệu nhận biết:</strong> Kết hợp kiến thức nửa vời + tuyên bố "bị giấu" + kêu gọi mua hàng cấp bách ("hết hàng").',
            '🔬 <strong>Giải thích khoa học:</strong> Không có nghiên cứu nào công nhận vòng từ trường chặn bức xạ điện thoại. Bức xạ điện thoại ở mức an toàn theo tiêu chuẩn quốc tế.',
            '🛡️ <strong>Cách phòng tránh:</strong> Khi thấy "mua ngay", "hết hàng", "bị giấu" → nâng cao cảnh giác. Tìm thông tin từ tổ chức khoa học, y tế chính thống.'
        ]
    }
]);

/**
 * Trạng thái ứng dụng — Tập trung quản lý
 */
const State = {
    startTime: null,
    totalMs: 0,
    reflectCount: 0,
    currentModule: 1,
    currentRound: 0,
    weekStart: new Date('2026-10-06'), // Đặt ngày bắt đầu thực tế
    isPaused: false,
    timerId: null,

    get totalSeconds() { return Math.floor(this.totalMs / 1000); },
    get availableModule() {
        if (CONFIG.NODE_ENV === 'development') return CONFIG.TOTAL_MODULES;
        const days = Math.floor((Date.now() - this.weekStart) / 86400000);
        return Math.min(CONFIG.TOTAL_MODULES, Math.floor(days / 7) + 1);
    },
    get varX() {
        return `X = ${this.totalSeconds} giây (${(this.totalSeconds / 60).toFixed(1)} phút)`;
    },

    reset() {
        this.startTime = null;
        this.totalMs = 0;
        this.reflectCount = 0;
        this.currentModule = 1;
        this.currentRound = 0;
        this.isPaused = false;
        if (this.timerId) clearInterval(this.timerId);
    },

    toJSON() {
        return { totalMs: this.totalMs, reflectCount: this.reflectCount, currentModule: this.currentModule };
    }
};

/**
 * Quản lý giao diện — Tách logic hiển thị
 */
const UI = {
    views: {
        auth: document.getElementById('auth-view'),
        session: document.getElementById('session-view'),
        completion: document.getElementById('completion-view')
    },
    elements: {
        form: document.getElementById('auth-form'),
        codeInput: document.getElementById('access-code'),
        message: document.getElementById('auth-message'),
        container: document.getElementById('view-container'),
        progressBar: document.getElementById('progress-bar'),
        moduleBadge: document.getElementById('module-badge'),
        timerDisplay: document.getElementById('timer-display'),
        statTime: document.getElementById('stat-time'),
        statReflect: document.getElementById('stat-reflect'),
        varX: document.getElementById('var-X'),
        resetBtn: document.getElementById('reset-btn')
    },

    switchView(name) {
        Object.entries(this.views).forEach(([key, el]) => {
            el.classList.toggle('active', key === name);
            el.setAttribute('aria-hidden', String(key !== name));
        });
    },

    showMessage(text, type = 'error') {
        this.elements.message.textContent = text;
        this.elements.message.className = `message ${type}`;
    },

    updateProgress() {
        const pct = ((State.currentModule - 1) / CONFIG.TOTAL_MODULES) * 100;
        this.elements.progressBar.style.width = `${pct}%`;
        this.elements.moduleBadge.textContent = `Tuần ${State.currentModule}/${CONFIG.TOTAL_MODULES}`;
    },

    updateTimer() {
        const t = State.totalSeconds;
        const m = Math.floor(t / 60).toString().padStart(2, '0');
        const s = (t % 60).toString().padStart(2, '0');
        this.elements.timerDisplay.textContent = `${m}:${s}`;
    },

    render(content) {
        this.elements.container.innerHTML = content;
    },

    bind(selector, event, handler) {
        this.elements.container.querySelector(selector)?.addEventListener(event, handler);
    }
};

/**
 * Bộ điều khiển chính
 */
const Controller = {
    init() {
        // Khôi phục phiên nếu có
        this.restoreSession();
        
        // Gắn sự kiện
        UI.elements.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });
        UI.elements.resetBtn.addEventListener('click', () => {
            State.reset();
            localStorage.removeItem(CONFIG.STORAGE_KEY);
            UI.switchView('auth');
            UI.elements.codeInput.value = '';
            UI.showMessage('');
        });
    },

    restoreSession() {
        try {
            const saved = localStorage.getItem(CONFIG.STORAGE_KEY);
            if (saved) {
                const data = JSON.parse(saved);
                State.totalMs = data.totalMs || 0;
                State.reflectCount = data.reflectCount || 0;
                State.currentModule = data.currentModule || 1;
            }
        } catch (e) { /* Bỏ qua lỗi lưu trữ */ }
    },

    saveSession() {
        localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(State));
    },

    handleLogin() {
        const code = UI.elements.codeInput.value.trim();
        if (!CONFIG.ACCESS_CODES.includes(code)) {
            UI.showMessage('❌ Mã truy cập không hợp lệ. Vui lòng kiểm tra lại mã do nhóm nghiên cứu cung cấp.');
            return;
        }

        // Đăng nhập thành công
        UI.showMessage('✅ Đăng nhập thành công!', 'success');
        setTimeout(() => {
            UI.switchView('session');
            State.startTime = Date.now();
            State.currentModule = State.availableModule;
            this.startTimer();
            this.loadModule(State.currentModule);
        }, 600);
    },

    startTimer() {
        State.timerId = setInterval(() => {
            if (State.startTime && !State.isPaused) {
                State.totalMs = Date.now() - State.startTime;
                UI.updateTimer();
                this.saveSession();
            }
        }, 1000);
    },

    loadModule(num) {
        State.currentRound = 0;
        UI.updateProgress();
        const mod = MODULES[num - 1];
        this.renderIntro(mod);
    },

    renderIntro(mod) {
        State.currentRound++;
        const content = `
            <div class="card">
                <h2 class="card-title">${mod.title}</h2>
                <div class="post-frame">${mod.post}</div>
                <p class="prompt">Bạn sẽ xử lý thông tin này như thế nào?</p>
                ${mod.options.map((opt, i) => `
                    <button class="choice-btn" data-choice="${i}">
                        ${i + 1}. ${opt}
                    </button>
                `).join('')}
            </div>
        `;
        UI.render(content);
        
        UI.elements.container.querySelectorAll('.choice-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.target.dataset.choice);
                this.handleChoice(idx, mod);
            });
        });
    },

    handleChoice(index, mod) {
        // Hiện phản hồi
        UI.render(`
            <div class="card">
                <div class="response-box">${mod.responses[index]}</div>
                <p class="pause-indicator">Đang suy ngẫm</p>
            </div>
        `);

        // Tạm dừng 3 giây
        State.isPaused = true;
        setTimeout(() => {
            State.isPaused = false;
            this.showReflection(mod);
        }, CONFIG.REFLECT_PAUSE_MS);
    },

    showReflection(mod) {
        State.reflectCount++;
        const q = mod.questions[State.currentRound - 1] || mod.questions[0];
        
        UI.render(`
            <div class="card">
                <div class="reflection-section">
                    <p class="reflect-question">💭 ${q}</p>
                    <div class="reflect-option" data-continue="true">
                        ✅ Tôi đã suy nghĩ và sẵn sàng tiếp tục
                    </div>
                </div>
            </div>
        `);

        UI.bind('[data-continue]', 'click', () => {
            if (State.currentRound < 4) {
                this.renderIntro(mod);
            } else {
                this.showExplanation(mod);
            }
        });
    },

    showExplanation(mod) {
        UI.render(`
            <div class="card">
                <div class="explain-section">
                    <h3 class="explain-title">📚 Giải thích & Bài học phòng tránh</h3>
                    ${mod.lessons.map(text => `<p class="explain-item">${text}</p>`).join('')}
                </div>
                <button class="btn next-btn" data-next="${State.currentModule < CONFIG.TOTAL_MODULES ? 'more' : 'done'}">
                    ${State.currentModule < CONFIG.TOTAL_MODULES ? 'Tiếp tục sang mô-đun tiếp theo →' : 'Hoàn thành chương trình 🎉'}
                </button>
            </div>
        `);

        UI.bind('[data-next="more"]', 'click', () => {
            State.currentModule++;
            this.saveSession();
            this.loadModule(State.currentModule);
        });

        UI.bind('[data-next="done"]', 'click', () => {
            this.showCompletion();
        });
    },

    showCompletion() {
        clearInterval(State.timerId);
        this.saveSession();
        
        // Ghi log dữ liệu nghiên cứu
        if (CONFIG.NODE_ENV === 'development') {
            console.log('=== DỮ LIỆU NGHIÊN CỨU ===');
            console.log('Biến X:', State.varX);
            console.log('Số lần suy ngẫm:', State.reflectCount);
            console.log('Mô-đun hoàn thành:', State.currentModule);
        }

        UI.elements.statTime.textContent = Math.round(State.totalSeconds / 60);
        UI.elements.statReflect.textContent = State.reflectCount;
        UI.elements.varX.textContent = State.varX;
        
        UI.switchView('completion');
    }
};

// Khởi động ứng dụng
document.addEventListener('DOMContentLoaded', () => Controller.init());

export default {};
