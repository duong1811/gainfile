import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RiAddLine,
  RiWalletLine,
  RiShoppingCartLine,
  RiCarLine,
  RiHomeLine,
  RiGamepadLine,
  RiDeleteBinLine
} from 'react-icons/ri';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../context/ThemeContext';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Modal, ModalBody, ModalFooter } from '../components/ui/Modal';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

const ExpenseTracker = () => {
  const { isDarkMode } = useTheme();

  const chartTheme = isDarkMode ? 'dark' : 'light';
  const textColor = isDarkMode ? '#ffffff' : '#1f2937';
  const axisColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  const [expenses, setExpenses] = useState([
    { id: 1, amount: 45.50, category: 'Food', description: 'Grocery shopping', date: '2026-01-15' },
    { id: 2, amount: 120.00, category: 'Transport', description: 'Gas station', date: '2026-01-14' },
    { id: 3, amount: 89.99, category: 'Entertainment', description: 'Movie tickets', date: '2026-01-13' },
    { id: 4, amount: 350.00, category: 'Housing', description: 'Utility bills', date: '2026-01-12' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newExpense, setNewExpense] = useState({
    amount: '',
    category: 'Food',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  const categories = [
    { name: 'Food', icon: RiShoppingCartLine, color: 'from-emerald-400 to-teal-500' },
    { name: 'Transport', icon: RiCarLine, color: 'from-[var(--aurora-1)] to-[var(--aurora-2)]' },
    { name: 'Entertainment', icon: RiGamepadLine, color: 'from-purple-400 to-pink-500' },
    { name: 'Housing', icon: RiHomeLine, color: 'from-orange-400 to-rose-500' },
  ];

  const addExpense = () => {
    if (newExpense.amount && newExpense.description.trim()) {
      setExpenses([
        {
          id: Date.now(),
          amount: parseFloat(newExpense.amount),
          category: newExpense.category,
          description: newExpense.description,
          date: newExpense.date
        },
        ...expenses
      ]);
      setNewExpense({
        amount: '',
        category: 'Food',
        description: '',
        date: new Date().toISOString().split('T')[0]
      });
      setShowAddForm(false);
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const getCategoryIcon = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.icon : RiWalletLine;
  };

  const getCategoryColor = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : 'from-gray-400 to-gray-500';
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  const getCategoryTotals = () => {
    const totals = {};
    expenses.forEach(expense => {
      totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    });
    return totals;
  };

  const getChartOption = () => {
    const categoryTotals = getCategoryTotals();
    const data = Object.entries(categoryTotals).map(([category, amount]) => ({
      value: amount,
      name: category,
      itemStyle: {
        borderRadius: 8,
        borderColor: isDarkMode ? '#030712' : '#ffffff',
        borderWidth: 2
      }
    }));

    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.9)',
        borderColor: axisColor,
        textStyle: { color: textColor }
      },
      series: [{
        name: 'Expenses',
        type: 'pie',
        radius: ['55%', '80%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        data: data,
        label: { show: false },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold',
            color: textColor
          }
        }
      }]
    };
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)]">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RiWalletLine className="text-[var(--aurora-1)]" />
            <Badge color="emerald" size="xs" rounded="full" className="font-bold uppercase tracking-widest text-white">
              Financial Matrix
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Expense <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Analytics</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Capture flows and optimize your financial velocity.</p>
        </div>

        <Card variant="interactive" className="px-8 py-6 rounded-[2rem] flex items-center gap-6">
          <div>
            <p className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Net Outflow</p>
            <p className="text-3xl font-bold text-[var(--text-primary)] tracking-tighter">${getTotalExpenses().toFixed(2)}</p>
          </div>
          <Button
            onClick={() => setShowAddForm(true)}
            variant="white"
            size="icon-lg"
            className="rounded-2xl !bg-[var(--text-primary)] !text-[var(--bg-primary)] hover:!bg-[var(--aurora-1)] hover:!text-white"
          >
            <RiAddLine size={24} />
          </Button>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <Card
          className="lg:col-span-5"
          transition={{ delay: 0.4 }}
        >
          <CardHeader>
            <CardTitle className="text-xl">Asset Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            {Object.keys(getCategoryTotals()).length > 0 ? (
              <div className="relative">
                <ReactECharts
                  option={getChartOption()}
                  style={{ height: '350px', width: '100%' }}
                  opts={{ renderer: 'svg' }}
                  theme={chartTheme}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                  <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.3em]">Total</p>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">${getTotalExpenses().toFixed(0)}</p>
                </div>
              </div>
            ) : (
              <div className="h-[350px] flex items-center justify-center text-[var(--text-secondary)]">
                <p className="font-bold uppercase tracking-widest text-xs">Awaiting Data Entry</p>
              </div>
            )}
          </CardContent>
        </Card>

        <motion.div
          className="lg:col-span-7 space-y-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center justify-between mb-2 px-2">
            <h3 className="text-xl font-bold">Transaction Logs</h3>
            <Badge color="glass" size="xs" className="font-bold uppercase tracking-widest">
              {expenses.length} Records
            </Badge>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <AnimatePresence mode="popLayout">
              {expenses.map((expense) => {
                const Icon = getCategoryIcon(expense.category);
                const colorClass = getCategoryColor(expense.category);
                return (
                  <Card
                    key={expense.id}
                    as={motion.div}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    padding="sm"
                    className="flex items-center gap-4 group hover:border-[var(--aurora-1)] transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg shadow-black/10`}>
                      <Icon size={22} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <p className="font-bold text-[var(--text-primary)] group-hover:text-[var(--aurora-1)] transition-colors">{expense.description}</p>
                      <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-tighter mt-0.5">
                        {expense.category} • {new Date(expense.date).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="text-lg font-bold text-[var(--text-primary)] tracking-tight">-${expense.amount.toFixed(2)}</p>
                      <Button
                        onClick={() => deleteExpense(expense.id)}
                        variant="ghost"
                        size="icon-xs"
                        className="hover:!text-rose-500 hover:bg-rose-500/10 opacity-0 group-hover:opacity-100"
                      >
                        <RiDeleteBinLine size={16} />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </AnimatePresence>

            {expenses.length === 0 && (
              <Card variant="glass" className="py-20 border-dashed flex flex-col items-center justify-center opacity-70 text-[var(--text-secondary)]">
                <RiWalletLine size={40} className="mb-4" />
                <p className="font-bold uppercase tracking-[0.2em] text-xs">No records found</p>
              </Card>
            )}
          </div>
        </motion.div>
      </div>

      <Modal
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        title="Log Expense"
      >
        <ModalBody className="space-y-4">
          <div>
            <Label>Amount ($)</Label>
            <Input
              type="number"
              step="0.01"
              placeholder="0.00"
              value={newExpense.amount}
              onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
              variant="aurora1"
              className="font-mono font-bold text-lg"
              autoFocus
            />
          </div>

          <div>
            <Label>Description</Label>
            <Input
              placeholder="What was it for?"
              value={newExpense.description}
              onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
              variant="aurora1"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Category</Label>
              <Select
                value={newExpense.category}
                onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                variant="aurora1"
              >
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name} className="bg-[var(--bg-primary)]">
                    {cat.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Label>Date</Label>
              <Input
                type="date"
                value={newExpense.date}
                onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })}
                variant="aurora1"
              />
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => setShowAddForm(false)}
            variant="ghost"
            className="flex-1 font-bold"
          >
            Cancel
          </Button>
          <Button
            onClick={addExpense}
            variant="primary"
            className="flex-1 rounded-2xl font-bold py-4"
          >
            Save Entry
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ExpenseTracker;