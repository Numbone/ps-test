import { Modal, Button } from 'antd';

interface OrderModalProps {
  isOpen: boolean;
  total: number;
  onClose: () => void;
}

export const OrderModal = ({ isOpen, total, onClose }: OrderModalProps) => (
  <Modal
    title="Добавлено в корзину"
    open={isOpen}
    onCancel={onClose}
    footer={[
      <Button key="close" onClick={onClose}>
        Закрыть
      </Button>
    ]}
  >
    <p>Ваш конфиг добавлен в корзину. Итог: {total.toLocaleString()} тг</p>
  </Modal>
);